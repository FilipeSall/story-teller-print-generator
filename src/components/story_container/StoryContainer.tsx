import { useState } from 'react';
import './StoryContainer.css';
import { FaTrashAlt } from "react-icons/fa";

function StoryContainer() {

    const [stories, setStories] = useState<Array<{ title: string; text: string, id?: number }>>([]);

    const deleteStory = (id: number | undefined) => {
        if (id !== undefined) {
            const updatedStories = stories.filter(story => story.id !== id);
            setStories(updatedStories);
        }
    };

    return (
        <>
            {stories.map((story, index) => (
                <div key={index} className='story_container'>
                    <h1 className='story_title'>{story.title}</h1>
                    <p className='story_text'>{story.text}</p>
                    <div className='button_container-edit--wrapper'>
                        <button className='remove_unique-story--btn' onClick={() => deleteStory(story.id)}
                        >
                            <FaTrashAlt size={22} fill='#808080' />
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default StoryContainer