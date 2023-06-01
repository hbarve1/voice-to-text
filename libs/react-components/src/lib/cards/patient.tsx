import { Link } from 'react-router-dom';

export function PatientCard({
  id,
  name,
  age,
}: {
  id: number;
  name: string;
  age: number;
}) {
  return (
    <Link
      key={id}
      className="p-2 bg-white m-1 rounded-md shadow-sm hover:shadow-lg flex items-center"
      to={`/patients/${id}`}
    >
      <img
        src="https://via.placeholder.com/150"
        alt="patient"
        className="w-12 h-12 rounded-lg mr-2"
      />
      <div className="">
        <div className="text-gray-900">{name}</div>
        <div className="text-xs text-gray-800">{age}</div>
      </div>
    </Link>
  );
}
