import React, { useContext, useState } from "react"
import { useHistory } from "react-router"
import "./Round.css"
import { RoundContext } from "./RoundProvider"
import { useParams } from "react-router-dom";
import { CourseContext } from "../courses/CourseProvider"

export const RoundCard = ({ round, course }) => {
    // const {roundId} = useParams()
    const { deleteRound, updateRound } = useContext(RoundContext)
    const history = useHistory()
    // const [round, setRound] = useState({})


    const handleDelete = () => {
        deleteRound(round.id)
            .then(() => {
                history.push("/")
            })
    }

    const handleEdit = () => {
        history.push(`/edit/${round.id}`)
    }

    const scoreToPar = () => {
        const parScore = round.score - course.par
        if (parScore > 0) {
            return "( +" + parScore + " )"
        }
        if (parScore < 0) {
            return "( " + parScore + " )"
        }
        if (parScore === 0) {
            return "( E )"
        }
    }

    return (
        <section className="roundCard">
            <h4 className="courseName">{course.name}</h4>
            <h2 className="roundScore">{round.score} Strokes</h2>
            <h3 className="roundScoreToPar">{scoreToPar()}</h3>
            <h4 className="roundDate">{round.date}</h4>
            <button className="editRoundButton" onClick={handleEdit}> Edit Round </button>
            <button className="roundDeleteButton" onClick={handleDelete}>Delete Round</button>
        </section>
    )
}