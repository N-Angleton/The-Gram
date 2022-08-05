import React from "react";
import { HeaderContainer } from "../header/header_container";
import { FeedContainer } from "../feed/feed_container";
import { SidebarContainer } from "../sidebar/sidebar_container";

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <HeaderContainer />
        <main className="feed">
          <FeedContainer />
        </main>
        <aside className="sidebar"><SidebarContainer/></aside>
      </div>
    );
  }
}
