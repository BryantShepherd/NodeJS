const express = require('express');
const router = express.Router(); // TODO:
const members = require("../../Members");
const uuid = require('uuid');

// Get All Member
router.get('/', (request, response) => {
    response.json(members);
});

// Get Single Member
router.get('/:id', (request, response) => {
    const found = members.some(member => member.id === parseInt(request.params.id));
    if (found) response.json(members.filter(member => member.id === parseInt(request.params.id))); // TODO: filter()
    else {
        response.status(400).json({
            msg: `No member with the id of ${request.params.id}`
        });
    }
});

router.post('/', (request, response) => {
    const newMember = {
        id: uuid.v4(),
        name: request.body.name,
        email: request.body.email,
        status: 'active'
    };

    if (!newMember.name || !newMember.email) {
        return response.status(400).json({
            msg: "Include a name"
        });
    }

    members.push(newMember);
    response.json(members);
});

// Update Member
router.put('/:id', (request, response) => {
    const found = members.some(member => member.id === parseInt(request.params.id));
    if (found) {
        const updateMember = request.body;
        members.forEach(member => {
            if (member.id === parseInt(request.params.id)) {
                member.name = updateMember.name ? updateMember.name : member.name;
                member.email = updateMember.email ? updateMember.email : member.email;

                response.json({
                    msg: "Member updated",
                    member
                })
            }
        })
    }
    else {
        response.status(400).json({
            msg: `No member with the id of ${request.params.id}`
        });
    }
});

module.exports = router;