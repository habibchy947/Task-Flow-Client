import React from 'react';

const CreateTask = ({ addTask }) => {

    return (
        <div className="mt-8 max-w-md mx-auto">
            <form action="" onSubmit={addTask}>
                <input
                    type="text"
                    name='title'
                    placeholder="Task title"
                    className="w-full mb-2 p-2 dark:bg-gray-600 dark:text-white border rounded"
                    required
                />
                <textarea
                    name='description'
                    placeholder="Description"
                    className="w-full mb-2 p-2 dark:bg-gray-600 dark:text-white border rounded"
                    required
                />
                <button
                    className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default CreateTask;