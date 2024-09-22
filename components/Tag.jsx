'use client'

import { useRouter } from 'next/navigation'

const Tag = (props) => {
  const { text } = props;
  const router = useRouter()

  return (
    <div className="bg-gradient-to-r from-orange-400 to-teal-600 text-white rounded-2xl w-fit px-3 py-1 text-center font-bold hover:scale-110 hover:cursor-pointer"
      onClick={() => router.push(`/events?tag=${text}`)}>
      # {text}
    </div>
  );
};

export default Tag;
