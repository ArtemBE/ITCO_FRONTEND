import React from 'react'

export default function CreateProjectSection() {
  return (
    <div className="createProjectSection">
            <div className="createProject">
            <label> Название: 
                <input type="text" className="createProject__name-field" />
            </label>
            <label> Описание:
                <textarea name className="createProject__description-field" defaultValue={"\n                    "} />
            </label>
            <div className="createProject__photo">
                <img src="icons/Nature.jpg" alt="dd" />
            </div>
            <label> Фото
                <input type="file" className="createProject__input-photo" accept="image/*" />
            </label>
            <label>Удалить фотографию <input type="checkbox" /></label>
            </div>
        </div>
  )
}
