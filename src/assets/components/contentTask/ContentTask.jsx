import {Trash, Check} from "phosphor-react"

export const ContentTask = ({task, isCompleted, onDelete, onSelect}) => {

    function handleSelectTask () {
        onSelect(task.id)
    }

    function handleDeleteTask(){
        onDelete(task.id)
    }

    return (
        <div className="contentTask">
            <button onClick={handleSelectTask} type="button" className={!isCompleted ? "btn__normal" : "btn__check"}>
                {isCompleted ? <Check size={7} color={"#FFF"}/>: null}
            </button>
            

            <div className="contentTask__text">
                <p onClick={handleSelectTask} className={!isCompleted ? "normalItem": "selectedItem"}>
                    {task.title}
                </p>
            </div>

            <button onClick={handleDeleteTask} type="button" className="btn__delete">
                <Trash size={20}/>
            </button>
        </div>
    )
}