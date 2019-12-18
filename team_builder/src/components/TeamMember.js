import React from "react";
import {Card} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

const MemberCard = props => {
    return (
        <div className={'cardMember'}>
            {props.team.map(member => (
                <div className={'card'} key={member.id}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{member.name}</Card.Header>
                                <Card.Meta>{member.role}</Card.Meta>
                                <Card.Description>{member.email}</Card.Description>
                                <button onClick={props.memberToEdit}>Edit</button>
                            </Card.Content>
                        </Card>
                </div>
            ))}
        </div>
    )
};
export default MemberCard;