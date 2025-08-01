import { getInterviewById } from '@/lib/actions/general.action';
import { getRandomInterviewCover } from '@/lib/utils';
import { redirect } from 'next/navigation';
import React from 'react'
import Image from 'next/image';
import DisplayTechIcons from '@/components/DisplayTechIcons';
import { getCurrentUser } from '@/lib/actions/auth.action';
import Agent from '@/components/Agent';
const page =  async ({params}:RouteParams) => {
    const {id} =  await params;
    const user =await getCurrentUser();
    const interview = await getInterviewById(id);
    if(!interview) redirect('/');
  return (
    <>
    <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-row gap-4 items-cover max-sm:flex-col">
            <div className="flex flex-row gap-4 items-center">
                <Image src={getRandomInterviewCover()} alt="interview cover" width={100} 
                height={100} 
                className="rounded-full object-cover size-[40px]"/>
                <h3 className='capitalize  '>{interview.role}Interview</h3>
            </div>
            <DisplayTechIcons techStack={interview.techstack}/>
        </div>
        <p className='py-2 px-4 bg-dark-200 rounded-lg h-fit capitalize '>
            {interview.type}
        </p>
    </div>
    <Agent 
    userName={user?.name} 
        type={user?.id}
        interviewId={id}
        type='inteview'
        questions={interview.questions}
        />
    }
    </>
  )
}

export default page