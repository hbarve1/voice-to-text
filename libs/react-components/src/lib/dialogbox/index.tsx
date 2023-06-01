import { IconCross } from '@suki-ai/react-svg';

export function DialogBox({
  isOpen = false,
  children,
  onClose,
  ...props
}: {
  isOpen?: boolean;
  children: React.ReactNode;
  onClose: () => void;
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed z-50 w-screen h-screen bg-slate-300/60 top-0 left-0 flex justify-center items-center shadow-lg">
      <div className="bg-white w-1/2 rounded-lg shadow-md p-4 flex flex-col justify-center items-center">
        <div className="w-full flex justify-between mb-4">
          <h2 className="text-xl font-bold">Settings</h2>
          <button onClick={onClose}>
            <IconCross />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
