import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';
import DndListComponent from '../components/dnd-list.component';
import { useLocalStorage } from '../utils/localStorage';

function Survey05Page() {

    const items = ["Wirtschaft", "Gesundheit", "Umwelt", "Demokratie", "Bildung"]

    const [futureList, setFutureList] = useLocalStorage("futurelist", items);

    const onChange = (evt) => {
        setFutureList(evt.items);
    }

    return (
        <SurveyFrame number="05/12" question="WIE BEWERTEST DU DIESE DINGE IN HINBLICK AUF DIE ZUKUNFT IN DEUTSCHLAND?" prevPath="/04" nextPath="/06">
            <p>Ordne nach Priorität</p>
            <DndListComponent onChange={onChange} items={futureList}></DndListComponent>
        </SurveyFrame>
    );
}

export default Survey05Page;