interface Game {
    appid: number;
}
interface Data {
  response: {
    games: Game[];
  }
}
export const getAllGames = async (steamId: string):Promise<number[]> => {
  if(!steamId) return [];
  if(!process.env.NEXT_PUBLIC_DEV_KEY) throw new Error('No dev key found');
  const response = await fetch(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.NEXT_PUBLIC_DEV_KEY}&steamid=${steamId}&format=json`);
  const data: Data = await response.json();
  const games = data.response.games;
  return games.map(game => game.appid);
}
export const getGameData = async (gameId: string) => {
  try {
    const response = await fetch(`https://store.steampowered.com/api/appdetails/?appids=${gameId}`);
    const data = await response.json();
    const storageRequirements = parseStorageRequirements(data[gameId].data.pc_requirements.minimum)
    if (!storageRequirements) {
      console.log(data[gameId].data.name + ' has no storage requirements');
      return null;
    }
    return storageRequirements;
  } catch (e) {
    console.log('error fetching ' + gameId);
    return null;
  }
}

const parseStorageRequirements = (storageRequirements: string) => {
  try {
    let splitString = "";
    if(storageRequirements.includes('<strong>Hard Drive:</strong>')) {
      splitString = '<strong>Hard Drive:</strong>';
    } else if(storageRequirements.includes('<strong>Hard Disk Space:</strong>')) {
      splitString = '<strong>Hard Disk Space:</strong>';
    } else {
      splitString = '<strong>Storage:</strong>';
    }
    const storageRequirementsString = storageRequirements.split(splitString)[1].split('<')[0].trim();
    let storageRequirementsArr = storageRequirementsString.split(' ');
    let storageRequirementsObj: { amount: string, unit: string } = {
      amount: '',
      unit: ''
    };
    storageRequirementsObj['amount'] = storageRequirementsArr[0];
    if(storageRequirementsArr[1].includes('MB')) {
      storageRequirementsObj['unit'] = 'MB';
      return storageRequirementsObj;
    } else if(storageRequirementsArr[1].includes('GB')) {
      storageRequirementsObj['unit'] = 'GB';
      return storageRequirementsObj;
    }
    storageRequirementsObj['unit'] = storageRequirementsArr[1];
    return storageRequirementsObj;
  } catch (e) {
    return false;
  }
}
