import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import './SideNav.css';

export default class SideNav extends Component {

  render() {

    return (
      <div className="SideNav">
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' width='thin' visible={true} icon='labeled' vertical>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='block layout'>
              <Icon name='block layout' />
              Products
            </Menu.Item>
            <Menu.Item name='settings'>
              <Icon name='settings' />
              Settings
            </Menu.Item>
            <Menu.Item name='log out'>
              <Icon name='log out' />
              Logout
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher className="content">
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              {/* <Image src='/assets/images/wireframe/paragraph.png' /> */}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
