import React from 'react';
import shortid from 'shortid';

const Course = ({ course }) => {
    const Header = ({ course }) => {
        const { name } = course;
        return (
            <div>
                <h1 key={shortid.generate()}>{name}</h1>
            </div>
        )
    }

    const Content = ({ course }) => {
        const { parts } = course
        return (
            <div>
                {parts.map(i =>
                    <Part key={shortid.generate()} part={i} />)}
            </div>
        )
    }

    const Part = ({ part }) => {
        return (
            <div>
                <p key={shortid.generate()}> {`${part.name} ${part.exercises}`}</p>
            </div>
        )
    }

    const Total = ({ course }) => {
        const { parts } = course;
        return (
            <div>
                <h4>Total of {parts.map(i => i.exercises).reduce((a, b) => a + b, 0)} exercises</h4>
            </div >
        )
    }

    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

export default Course;