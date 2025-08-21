
import useRetreatData from "../../../../custom hooks/useRetreatData";
import Link from "next/link";


const EventDetailPage = ({ params }) => {
  const { EVENTS_DUMMY } = useRetreatData();
  const event = EVENTS_DUMMY.find((e) => e.id.toString() === params.id);

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <div className="p-4">

    <Link 
        key="link"
        href={`/events/`} 
        className='m-2'
    > zurück
    </Link>


      <h1 className="text-2xl mt-6 font-bold">{event.title}</h1>
      <p>{event.descriptionsTitle}</p>
      <p>{event.subDescription}</p>
      <p><strong>Preis:</strong> {event.price}</p>

      <img 
        src={event.imagePath} 
        alt={event.title} 
        className="mt-4 w-full max-w-xl rounded-lg shadow-md"
      />

      <ul className="mt-4 list-disc list-inside">
        {event.descriptionsTable.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default EventDetailPage;
