import LeftArrowButton from '@/components/buttons/LeftArrowButton';
import JCLogo from '@/components/JCLogo';
import RefreshButton from '@/components/buttons/RefreshButton';

export default function AppHeader() {
  return (
    <div className="flex justify-between items-center py-[20px] md:max-w-md gap-2">
      <div className="min-w-fit">
        <LeftArrowButton />
      </div>
      <div className="flex-1 flex justify-center">
        <JCLogo />
      </div>
      <div className="min-w-fit">
        <RefreshButton />
      </div>
    </div>
  );
}
