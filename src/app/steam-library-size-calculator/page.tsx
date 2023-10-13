'use client';
import {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import { getAllGames, getGameData} from "./network";

export default function SteamLibrarySizeCalculator() {
  const [storageRequirements, setStorageRequirements] = useState(0)
  const [steamId, setSteamId] = useState('')
  const [gameIds, setGameIds] = useState<number[]>([])
  const [gameSizes, setGameSizes] = useState([])
  useEffect(() => {
    console.log(gameIds)
  }, [gameIds])
  return (
    <main className={styles.body}>
      <div className={styles.body__content}>
        <input type="text" placeholder="Steam ID" onChange={(e) => setSteamId(e.target.value)} />
        <div className={styles.body__content__progressBar}>
            <div className={styles.body__content__progressBar__progress} style={{width: `${(gameSizes.length / gameIds.length) * 100}%`}}></div>
        </div>
        <div className={styles.body__content__percentage}>
          <span>{gameSizes.length}/{gameIds.length}</span>
        </div>

        <button onClick={async () => {
            const games = await getAllGames(steamId)
            setGameIds(games)
        }}>Get Games</button>
      </div>
    </main>
  )
}
