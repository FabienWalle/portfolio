import { FaRegFilePdf } from 'react-icons/fa';

const DownloadResumeButton = () => {
  return (
    <a
      href="/resume/FabienWalle-DeveloppeurPHPTypescript-Resume.pdf" 
      download="FabienWalle-DeveloppeurPHPTypescript-Resume.pdf" 
      className="cursor-pointer rounded-lg bg-mint px-[14px] py-[10px] flex justify-between items-center gap-2 text-[#00071E] text-center text-sm font-medium"
    >
      <FaRegFilePdf className='size-6' />
      CV
    </a>
  );
};

export default DownloadResumeButton;