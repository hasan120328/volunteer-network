import React from 'react';
import TaskView from '../TaskView/TaskView';

const Home = () => {
    const task=[
           {
               name:'Child Support',
               pic:'childSupport.png'
           },
           {
            name:'Animal Shelter', 
            pic:'animalShelter.png'
        },
        {
            name:'Bird House',
            pic:'birdHouse.png'
        },
        {
            name:'Good student',
            pic:'goodEducation.png'
        },
        {
            name:'Babysit during PTA meetings',
            pic:'babySit.png'
        },
        {
            name:'Host a river clean up',
            pic:'cleanWater.png'
        },
        {
            name:'clean up your local park',
            pic:'clearnPark.png'
        },
        {
            name:'Host a clothing swap ',
            pic:'clothSwap.png'
        },
        {
            name:'Give a seminar on driving safety ',
            pic:'driveSafety.png'
        },
        {
            name:'food charity',
            pic:'foodCharity.png'
        },
        {
            name:'Give it help to local adults',
            pic:'ITHelp.png'
        },
        {
            name:'organize books at library',
            pic:'libraryBooks.png'
        },
        {
            name:'give free music lessons',
            pic:'musicLessons.png'
        },
        {
            name:'new Books for children',
            pic:'newBooks.png'
        },
        {
            name:'refuse shelter',
            pic:'refuseShelter.png'
        },
        {
            name:'collect school suffiles',
            pic:'schoolSuffiles.png'
        },
        {
            name:'host a study group',
            pic:'studyGroup.png'
        },

    ]
    return (
        <div className="row">
           
            {
                task.map(task=> <TaskView task={task}></TaskView>)
            }
        </div>
    );
};

export default Home;