export function PatientSessionListItem(session: {
  id: number;
  date: string;
  duration: number;
  title: string;
}) {
  return (
    <div
      key={session.id}
      className="p-2 bg-white m-1 bg-transparent text-white rounded-md shadow-sm hover:shadow-lg flex justify-between items-center"
    >
      <div className="flex flex-col">
        <div className="text-gray-900">{session.title}</div>
        <div className="text-xs text-gray-900">
          {session.date} - {session.duration} min
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-gray-900">Stars</div>
        <div className="text-xs text-gray-800">
          {Math.floor(Math.random() * 5 + 1)}
        </div>
      </div>
    </div>
  );
}
