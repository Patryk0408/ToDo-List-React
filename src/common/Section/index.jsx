import { SectionContianer, SectionTitle, SectionHeader } from "./styled.js";

const Section = ({ title, body, button, extraHeaderContent }) => {
  return (
    <SectionContianer>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        {button}
        {extraHeaderContent}
      </SectionHeader>
      <div>{body}</div>
    </SectionContianer>
  );
};

export default Section;
