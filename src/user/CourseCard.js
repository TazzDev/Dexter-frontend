import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';

const CourseCard = (props) => {
    return (
        <Card   onClick={() =>
                    props.history.push(
                      `/user/dashboard/${props.redir}`
                    )
                  }
                bordered={false}
                hoverable
                style={{
                  width: 320,
                  marginLeft: 40,
                  marginTop: 40,
                  marginBottom: 40,
                  color: 'royalblue',
                  fontSize: 20,
                }}
                cover={
                  <img
                    alt={props.alttext}
                    src={props.image}
                    height="200px"
                  />
                }>
                <text>
                  <b>{props.title}</b>
                </text>
              </Card>
    )
}

export default CourseCard;