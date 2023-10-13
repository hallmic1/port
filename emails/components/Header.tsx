import React from "react";
import { MjmlColumn, MjmlGroup, MjmlSection, MjmlWrapper } from "@faire/mjml-react";
import {colors, spacing} from "../theme";
import Heading from "./Heading";

export default function Header() {
  return (
    <MjmlWrapper padding="40px 0 64px" backgroundColor={colors.black}>
      <MjmlSection cssClass="gutter">
        <MjmlGroup>
          <MjmlColumn width="100%">
            <Heading cssClass="h2" paddingBottom={spacing.s6}>
              Someone is reaching out!
            </Heading>
          </MjmlColumn>
        </MjmlGroup>
      </MjmlSection>
    </MjmlWrapper>
  );
}
