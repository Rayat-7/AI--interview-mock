import { getRandomInterviewCover } from '@/lib/utils';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import DisplayTechIcons from './DisplayTechIcons';
import dayjs from 'dayjs';
import { getFeedbackByInterviewId } from '@/lib/actions/general.action';

const InterviewCard = async ({id,userId,role,type,techstack,
  createdAt}:InterviewCardProps) => {
    const feedback =userId && id ? await getFeedbackByInterviewId({interviewId:id,userId})
    :null;
    const normalizedType = /mix/gi.test(type)?'Mixed':type;
    const formattedDate =dayjs(feedback?.createdAt || createdAt||Date.now()).format('MMM D,YYYY');
  return (
    <div className='card-border w-[360px] max-sm:w-full min-h-96'>
      <div className='card-interview'>
        <div>
          <div className='absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600'>
            <p className='bardge-text'></p>
          </div>
          <Image src={getRandomInterviewCover()} alt="coveriamge"
          className="rounded-full object-fit size-[90px]"
           width={90}
            height={90}/>
          <h3 className='mt-5 capitalize'>
            {role} interview
          </h3>
          <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row gap-2">
              <Image  src='/calendar.svg' 
              alt="calender" 
              width={22} 
              height={22}
              />
              <p>{formattedDate}</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <Image src='/star.svg' alt="star" width={22} height={22}/>
              <p>{feedback?.totalScore||'---'}/100</p>
            </div>
          </div>
          <p className='line-clamp-2 mt-5'>
            {feedback ?.finalAssessment || "You havent taken any interview yet.take it now to improve you skills"}


          </p>
        </div>
        <div className="flex flex-row justify-between">
          <DisplayTechIcons techStack={techstack}/>

          <Button className=" btn-primary">
            <Link href={feedback
              ?`/interview/${id}/feedback`
              :`/interview/${id}`
            }> 
            {feedback?'Check Feedback':'View Interview'}

            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default InterviewCard












// function dayjs(arg0: string | number) {
//   throw new Error('Function not implemented.');
// }
// import dayjs from "dayjs";
// import Link from "next/link";
// import Image from "next/image";

// import { Button } from "./ui/button";
// import DisplayTechIcons from "./DisplayTechIcons";

// import { cn, getRandomInterviewCover } from "@/lib/utils";
// import { getFeedbackByInterviewId } from "@/lib/actions/general.action";

// const InterviewCard = async ({
//   interviewId,
//   userId,
//   role,
//   type,
//   techstack,
//   createdAt,
// }: InterviewCardProps) => {
//   const feedback =
//     userId && interviewId
//       ? await getFeedbackByInterviewId({
//           interviewId,
//           userId,
//         })
//       : null;

//   const normalizedType = /mix/gi.test(type) ? "Mixed" : type;

//   const badgeColor =
//     {
//       Behavioral: "bg-light-400",
//       Mixed: "bg-light-600",
//       Technical: "bg-light-800",
//     }[normalizedType] || "bg-light-600";

//   const formattedDate = dayjs(
//     feedback?.createdAt || createdAt || Date.now()
//   ).format("MMM D, YYYY");

//   return (
//     <div className="card-border w-[360px] max-sm:w-full min-h-96">
//       <div className="card-interview">
//         <div>
//           {/* Type Badge */}
//           <div
//             className={cn(
//               "absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg",
//               badgeColor
//             )}
//           >
//             <p className="badge-text ">{normalizedType}</p>
//           </div>

//           {/* Cover Image */}
//           <Image
//             src={getRandomInterviewCover()}
//             alt="cover-image"
//             width={90}
//             height={90}
//             className="rounded-full object-fit size-[90px]"
//           />

//           {/* Interview Role */}
//           <h3 className="mt-5 capitalize">{role} Interview</h3>

//           {/* Date & Score */}
//           <div className="flex flex-row gap-5 mt-3">
//             <div className="flex flex-row gap-2">
//               <Image
//                 src="/calendar.svg"
//                 width={22}
//                 height={22}
//                 alt="calendar"
//               />
//               <p>{formattedDate}</p>
//             </div>

//             <div className="flex flex-row gap-2 items-center">
//               <Image src="/star.svg" width={22} height={22} alt="star" />
//               <p>{feedback?.totalScore || "---"}/100</p>
//             </div>
//           </div>

//           {/* Feedback or Placeholder Text */}
//           <p className="line-clamp-2 mt-5">
//             {feedback?.finalAssessment ||
//               "You haven't taken this interview yet. Take it now to improve your skills."}
//           </p>
//         </div>

//         <div className="flex flex-row justify-between">
//           <DisplayTechIcons techStack={techstack} />

//           <Button className="btn-primary">
//             <Link
//               href={
//                 feedback
//                   ? `/interview/${interviewId}/feedback`
//                   : `/interview/${interviewId}`
//               }
//             >
//               {feedback ? "Check Feedback" : "View Interview"}
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InterviewCard;