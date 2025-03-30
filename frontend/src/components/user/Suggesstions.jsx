import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Suggesstions = ({ suggestions, setPickup, setDrop, activeField }) => {

    return <div className='w-full h-auto lg:mt-7 overflow-y-scroll z-10 px-8 py-0 lg:p-0' >
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
