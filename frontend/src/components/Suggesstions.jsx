import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Suggesstions = () => {
    const suggestions = [
        "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopals",
        "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopals",
        "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopals",
        "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopals",
        "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopals"
    ]
    return <div className='w-full mt-10'>
        {
            suggestions.map((suggestion, i) => (
                <div key={i} className='flex gap-2'>
                    <span className='flex items-center justify-center'>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-yellow-500" />
                    </span>
                    <p>{suggestion}</p>
                </div>
            ))
        }
    </div>;
};
export default Suggesstions;
