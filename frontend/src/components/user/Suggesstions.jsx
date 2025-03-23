import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Suggesstions = ({ suggestions, setPickup, setDrop, activeField }) => {

    return <div className='w-full h-auto mt-7 overflow-y-scroll' >
        {
            suggestions.map((suggestion, i) => (
                <div key={i} className='flex gap-2 mb-5 text-lg' onClick={() => activeField === 'pickup' ? setPickup(suggestion.description) : setDrop(suggestion.description)}>
                    <span className='flex items-center justify-center'>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-yellow-500" />
                    </span>
                    <p>{suggestion.description}</p>
                </div>
            ))
        }
    </div>;
};
export default Suggesstions;
