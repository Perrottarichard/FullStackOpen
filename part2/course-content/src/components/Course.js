import React from 'react';
//import shortid from 'shortid';

const Course = ({ course }) => {
    const Header = ({ course }) => {
        const { id, name } = course;
        return (
            <div>
                <h1 key={id}>{name}</h1>
            </div>
        )
    }
    const Content = ({ course }) => {
        const { parts } = course
        return (
            <div>
                {parts.map(i =>
                    <Part key={parts.id} part={i} />)}
            </div>

        )
    }
    const Part = ({ part }) => {
        return (
            <div>
                <p key={part.id}> {`${part.name} ${part.exercises}`}</p>
            </div>
        )
    }
    // const Total = ({ course }) => {
    //     const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
    //     return (
    //         <p>Number of exercises {sum}</p>
    //     )
    // }

    return (
        <div>
            <Header course={course} />
            <Content course={course} />
        </div>
    )
}

export default Course;