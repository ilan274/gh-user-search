import React, { useContext } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { MyContext } from '../../Context/MyContext';

const CardDetails = () => {
  const { userDetails } = useContext(MyContext);
  const { name, created_at, login, public_repos, avatar_url, html_url } = userDetails;
  return (
    <center>
      <Card>
        <Image
          as='a'
          rounded
          href={html_url}
          src={avatar_url}
          target="_blank"
        />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in {created_at.split('-')[0]}</span>
          </Card.Meta>
          <Card.Description>
            {login}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Icon name='code' />
            {public_repos} repos
        </Card.Content>
      </Card>
    </center>
  );
};


export default CardDetails;
