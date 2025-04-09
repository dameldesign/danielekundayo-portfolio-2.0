import { TimeLine, TimeLineItem } from "../utils/exp-timeline";

const Experience = () => {
  return (
    <div className="w-full relative pt-10 pb-20">
      <TimeLine>
        <TimeLineItem active>
          <TimeLineItem.Title>
            <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
              Software Engineer Developer SavetoBuy Limited 'Remote Job'
            </span>{" "}
            • <span className="text-neutral-200">October 2024 - Present</span>
          </TimeLineItem.Title>
          <TimeLineItem.Description>
            -Built & Managed frontend and mobile development assets,
            contributing to the successful launch of the first application on
            the Play Store.
          </TimeLineItem.Description>
          <TimeLineItem.Description>
            -Committed to continuous learning, staying updated on the latest
            technologies to drive innovation and efficiency..{" "}
          </TimeLineItem.Description>
        </TimeLineItem>

        <TimeLineItem>
          <TimeLineItem.Title>
            <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
              PBR Life Sciences 'Remote Job'{" "}
            </span>{" "}
            <span className="text-neutral-200">
              January 2024 - September 2024
            </span>
          </TimeLineItem.Title>
          <TimeLineItem.Description>
            -Demonstrated proficiency in coding best practices, leveraging
            technologies such as AWS Amplify and Amazon Cognito Identity JS for
            seamless user integration, resulting in an impressive 75% reduction
            in bugs
          </TimeLineItem.Description>
          <TimeLineItem.Description>
            - Initiated and managed the website's analytics feature, providing
            valuable consumer insights with React-Chart.js.
          </TimeLineItem.Description>
          <TimeLineItem.Description>
            - Utilized Amazon QuickSight Embedding SDK to accelerate project
            completion by 20%.
          </TimeLineItem.Description>
        </TimeLineItem>

        <TimeLineItem last>
          <TimeLineItem.Title>
            <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
              Tobams Group 'Remote Job'{" "}
            </span>{" "}
            <span className="text-neutral-200">
            September 2023 - December 2023
            </span>
          </TimeLineItem.Title>
          <TimeLineItem.Description>
            - Spearheaded the development team as the inaugural developer, responsible for establishing the foundational codebase and essential work tools crucial for day-to-day operations and project advancement.

          </TimeLineItem.Description>
          
        </TimeLineItem>
      </TimeLine>
    </div>
  );
};

export default Experience;
