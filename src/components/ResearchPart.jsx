import { BsSearch } from 'react-icons/bs';
import './ResearchPart.css';

function ResearchPart(){
   return(
    <button className="dugmePretraga">
				<BsSearch className="search" />
				<input
					type="text"
					id="myInput"
					onKeyUp={window['searchFunction']}
					placeholder="Pretrazi zivotinje po imenu"
				/>
	</button>
   )
}

export default ResearchPart;