import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';

function Survey08Page() {

    const items = ["Ja", "Nein"]

    const onChange = (evt) => {
        
    }

    return (
        <SurveyFrame number="08/12" question={<>Interessierst du dich für das Thema <span class="underline">Nachhaltigkeit</span>?</>} prevPath="/07b" nextPath="/09">
            <SelectorComponent onChange={onChange} items={items}></SelectorComponent>
        </SurveyFrame>
    );
}

export default Survey08Page;