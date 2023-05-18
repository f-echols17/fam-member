import React, { useState } from 'react';

function App() {
  const initialData = [
    { id: 1, name: 'Dennis Echols', age: 75, relationship: 'Father' },
    { id: 2, name: 'Anne Echols', age: 62, relationship: 'Mother' },
    { id: 3, name: 'Nikolai Echols', age: 39, relationship: 'Brother' },
  ];

  const [familyMembers, setFamilyMembers] = useState(initialData);
  const [selectedMember, setSelectedMember] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedMember, setEditedMember] = useState(null);

  function handleMemberClick(member) {
    setSelectedMember(member);
    setEditMode(false);
    setEditedMember(null);
  }

  function handleEditClick(member) {
    setEditMode(true);
    setEditedMember(member);
  }

  function handleUpdateClick() {
    const updatedMembers = familyMembers.map((member) => member.id === editedMember.id ? editedMember : member
    );
    setFamilyMembers(updatedMembers);
    setEditMode(false);
    setEditedMember(null);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setEditedMember({ ...editedMember, [name]: value });
  }

  return (
    <div>
      <h1>Family Members</h1>
      <ul>
        {familyMembers.map((member) => (
          <li key={member.id} onClick={() => handleMemberClick(member)}>
            {member.name}
          </li>
        ))}
      </ul>
      {selectedMember && (
        <div>
          <h2>Member Details</h2>
          {editMode && editedMember ? (
            <div>
              <input
                type="text"
                name="name"
                value={editedMember.name}
                onChange={handleInputChange} />
              <input
                type="number"
                name="age"
                value={editedMember.age}
                onChange={handleInputChange} />
              <input
                type="text"
                name="relationship"
                value={editedMember.relationship}
                onChange={handleInputChange} />
              <button onClick={handleUpdateClick}>Update</button>
            </div>
          ) : (
            <div>
              <p>Name: {selectedMember.name}</p>
              <p>Age: {selectedMember.age}</p>
              <p>Relationship: {selectedMember.relationship}</p>
              <button onClick={() => handleEditClick(selectedMember)}>
                Edit
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;