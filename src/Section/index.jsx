import { SectionContianer, SectionTitle, SectionHeader } from "./styled.js"

const Section = ({ title, body, extraHeaderContent }) => (
  <SectionContianer>
    <SectionHeader>
      <SectionTitle>
        {title}
      </SectionTitle>
      {extraHeaderContent}
    </SectionHeader>
    <div>
      {body}
    </div>
  </SectionContianer>
);

export default Section;