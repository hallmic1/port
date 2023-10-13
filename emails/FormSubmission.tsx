import React from "react";
import { MjmlColumn, MjmlSection, MjmlSpacer, MjmlWrapper } from "@faire/mjml-react";
import BaseLayout from "./components/BaseLayout";
import Button from "./components/Button";
import Header from "./components/Header";
import Text from "./components/Text";
import { fontSize, colors, spacing, screens } from "./theme";

const welcomeStyle = `
  .h1 > * {
    font-size: 56px !important;
  }
  .h2 > * {
    font-size: ${fontSize.lg}px !important;
  }
  .p > * {
    font-size: ${fontSize.base}px !important;
  }

  @media (min-width:${screens.xs}) {
    .h1 > * {
      font-size: 84px !important;
    }
    .h2 > * {
      font-size: ${fontSize.xxl}px !important;
    }
    .p > * {
      font-size: ${fontSize.md}px !important;
    }
  }
`;

type WelcomeProps = {
  user: {
    name: string;
    email?: string;
    phone?: string;
    message?: string;
  }
};

const FormSubmission = ({ user }: WelcomeProps) => {
  return (
    <BaseLayout width={600} style={welcomeStyle}>
      <Header />
      <MjmlWrapper backgroundColor={colors.black}>
        <MjmlSection paddingBottom={spacing.s11} cssClass="gutter">
          <MjmlColumn>
            <Text paddingBottom={spacing.s6}>
              <span style={{ color: colors.blue }}>●</span> {user.name} <br />
              <span style={{ color: colors.blue }}>●</span> {user.email} <br />
              <span style={{ color: colors.blue }}>●</span> {user.phone} <br />
            </Text>
            <Text cssClass="p" paddingBottom={spacing.s7}>
              {user.message}
            </Text>
            <MjmlSpacer height={spacing.s3} cssClass="lg-hidden" />
            <Button
              href={`mailto:${user.email}?subject=Re: ${user.message}&body=Hi ${user.name},`}
              align="right"
              backgroundColor={colors.blue}
              cssClass="lg-hidden"
            >
              Respond with an Email
            </Button>
            <MjmlSpacer height={spacing.s9} />
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
    </BaseLayout>
  );
};
FormSubmission.subject = "Thank you for installing Mailing :)";
export default FormSubmission;
