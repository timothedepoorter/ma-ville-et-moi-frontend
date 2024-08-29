import { Check, X } from "lucide-react/dist/cjs/lucide-react";
import { Button } from "./Button";

// eslint-disable-next-line react/prop-types
export const ProjectCardAdminDetail = ({ projectTitle }) => {
    return (
        <div className='bg-primaryColor relative max-w-screen-md rounded-[30px] px-3 py-10 flex justify-center w-full mb-4'>
            <div className="flex flex-col items-center">
                <h2 className='text-3xl text-black flex mb-6'>{projectTitle}</h2>
                <text className='text-3m text-black flex mb-12 ml-10 mr-10'>
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, optio aspernatur deleniti laboriosam veniam ullam sunt. Suscipit tempora officiis fugiat aliquid, dicta consequuntur reprehenderit ea vero culpa omnis ab voluptatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, optio aspernatur deleniti laboriosam veniam ullam sunt. Suscipit tempora officiis fugiat aliquid, dicta consequuntur reprehenderit ea vero culpa omnis ab voluptatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, optio aspernatur deleniti laboriosam veniam ullam sunt. Suscipit tempora officiis fugiat aliquid, dicta consequuntur reprehenderit ea vero culpa omnis ab voluptatibus.
                </text>
            </div>
            <Button icon={<Check />} variant="primary" className={"absolute left-4 bottom-3"} />
            <Button icon={<X />} variant="secondary" className={"absolute left-16 bottom-3"} />
        </div>
    );
}