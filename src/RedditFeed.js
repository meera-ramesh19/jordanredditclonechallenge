import React from 'react';
import './RedditFeed.scss';

const RedditFeed=()=> {
 return (


<div class='newsFeed'>

  <div class='newsFeed__dropDownButtons'>
    <div class='newsFeed__hotButton'>Hot v <span class="newsFeed__downArrow">&#160;</span></div>
    <div class='newsFeed__everyWhereButton'>EveryWhere v
      <span class="newsFeed__downArrow">&#160;</span>

    </div>
    <div class='newsFeed__line'></div>
    <div class='newsFeed__box'><svg rpl="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="16" width="16" icon-name="view-card-outline" fill="currentColor">
        <path d="M17.882 1H2.118A1.12 1.12 0 001 2.119v15.762A1.119 1.119 0 002.118 19h15.764A1.12 1.12 0 0019 17.881V2.119A1.12 1.12 0 0017.882 1zm-.132 16.75H2.25v-7.138h15.5v7.138zM2.25 9.362V2.25h15.5v7.112H2.25z"></path>
      </svg>
      <span> v </span>
      {/* <!--       <span class="newsFeed__downArrow">&#160;</span> --> */}
    </div>
  </div>
  <div class='newsFeed__feed'>
    <div class="newsFeed__article">

      <div class="newsFeed__info">
        <img src='https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_p6kb2m6b185b1.png' alt=''/>
        <div class='newsFeed__author'>u/UnawareMother2
        </div>
        <div class='newsFeed__time'>.10 hour ago</div>

        <div class='newsFeed__ellipses'>...
        </div>
      </div>

      <div class='newsFeed__content'>Lorem ipsum lorem ipsum lorem ipsum</div>
      <div class='newsFeed__socialIcons'>
        <div class='newsFeed__likeUnlike'>

          <svg rpl="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="16" width="16" icon-name="downvote-outline" fill="currentColor">
            {/* <!--?lit$9346789605$--> */}
            <g clip-path="url(#clip0_472_1137)">
              <path fill='gray' d="M10 20a1.122 1.122 0 01-.834-.372l-7.872-8.581A1.251 1.251 0 011.118 9.7 1.114 1.114 0 012.123 9H6V2.123A1.125 1.125 0 017.123 1h5.754A1.125 1.125 0 0114 2.123V9h3.874a1.114 1.114 0 011.007.7 1.25 1.25 0 01-.171 1.345l-7.876 8.589A1.128 1.128 0 0110 20zm-7.684-9.75L10 18.69l7.74-8.44h-4.99v-8h-5.5v8H2.316zm15.469-.05c-.01 0-.014.007-.012.013l.012-.013z"></path>
            </g>
            <defs>
              <clipPath id="clip0_472_1137">
                <path d="M0 0h20v20H0z"></path>
              </clipPath>
            </defs>
          </svg>
          <div class='newsFeed__likeUnlikeCount'>5K
          </div>
          <svg rpl="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="16" width="16" icon-name="upvote-outline" fill="currentColor">
            {/* <!--?lit$9346789605$--> */}
            <g clip-path="url(#clip0_472_1110)">
              <path fill='gray' d="M12.877 19H7.123A1.125 1.125 0 016 17.877V11H2.126a1.114 1.114 0 01-1.007-.7 1.249 1.249 0 01.171-1.343L9.166.368a1.128 1.128 0 011.668.004l7.872 8.581a1.252 1.252 0 01.176 1.348 1.114 1.114 0 01-1.005.7H14v6.877A1.125 1.125 0 0112.877 19zM7.25 17.75h5.5v-8h4.934L10 1.31 2.258 9.75H7.25v8zM2.227 9.784l-.012.016c.01-.006.014-.01.012-.016z"></path>
            </g>
            <defs>
              <clipPath id="clip0_472_1110">
                <path d="M0 0h20v20H0z"></path>
              </clipPath>
            </defs>
          </svg>

        </div>

        <div class='newsFeed__commentIcon'>
          <svg rpl="" class="icon-comment" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20" width="20" icon-name="comment-outline" fill="currentColor">
            {/* <!--?lit$380885483$--> */}
            <path fill='gray' d="M7.725 19.872a.718.718 0 01-.607-.328.725.725 0 01-.118-.397V16H3.625A2.63 2.63 0 011 13.375v-9.75A2.629 2.629 0 013.625 1h12.75A2.63 2.63 0 0119 3.625v9.75A2.63 2.63 0 0116.375 16h-4.161l-4 3.681a.725.725 0 01-.489.191zM3.625 2.25A1.377 1.377 0 002.25 3.625v9.75a1.377 1.377 0 001.375 1.375h4a.625.625 0 01.625.625v2.575l3.3-3.035a.628.628 0 01.424-.165h4.4a1.377 1.377 0 001.375-1.375v-9.75a1.377 1.377 0 00-1.374-1.375H3.625z"></path>
          </svg>

          <div class='newsFeed__comment'>4.1K</div>
        </div>

        <div class='newsFeed__shareIcon'>
          <svg rpl="" class="icon-share" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20" width="20" icon-name="share-ios-outline" fill="currentColor">
            {/* <!--?lit$380885483$--> */}
            <path fill='gray' d="M19 11v5.378A2.625 2.625 0 0116.378 19H3.622A2.625 2.625 0 011 16.378V11h1.25v5.378a1.373 1.373 0 001.372 1.372h12.756a1.373 1.373 0 001.372-1.372V11H19zM9.375 3.009V14h1.25V3.009l2.933 2.933.884-.884-4-4a.624.624 0 00-.884 0l-4 4 .884.884 2.933-2.933z"></path>
          </svg>
          <div class='newsFeed__share'>Share</div>
        </div>
      </div>
      <div class='newsFeed__lineBreak'></div>
      <div class="newsFeed__article">

        <div class="newsFeed__info">
          <img src='https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_p6kb2m6b185b1.png' alt=''/>
          <div class='newsFeed__author'>u/UnawareMother2
          </div>
          <div class='newsFeed__time'>.10 hour ago</div>

          <div class='newsFeed__ellipses'>...
          </div>
        </div>

        <div class='newsFeed__content'>Lorem ipsum lorem ipsum lorem ipsum</div>
        <div class='newsFeed__socialIcons'>
          <div class='newsFeed__likeUnlike'>

            <svg rpl="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="16" width="16" icon-name="downvote-outline" fill="currentColor">
              <g clip-path="url(#clip0_472_1137)">
                <path fill='gray' d="M10 20a1.122 1.122 0 01-.834-.372l-7.872-8.581A1.251 1.251 0 011.118 9.7 1.114 1.114 0 012.123 9H6V2.123A1.125 1.125 0 017.123 1h5.754A1.125 1.125 0 0114 2.123V9h3.874a1.114 1.114 0 011.007.7 1.25 1.25 0 01-.171 1.345l-7.876 8.589A1.128 1.128 0 0110 20zm-7.684-9.75L10 18.69l7.74-8.44h-4.99v-8h-5.5v8H2.316zm15.469-.05c-.01 0-.014.007-.012.013l.012-.013z"></path>
              </g>
              <defs>
                <clipPath id="clip0_472_1137">
                  <path d="M0 0h20v20H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <div class='newsFeed__likeUnlikeCount'>5K
            </div>
            <svg rpl="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="16" width="16" icon-name="upvote-outline" fill="currentColor">
              <g clip-path="url(#clip0_472_1110)">
                <path fill='gray' d="M12.877 19H7.123A1.125 1.125 0 016 17.877V11H2.126a1.114 1.114 0 01-1.007-.7 1.249 1.249 0 01.171-1.343L9.166.368a1.128 1.128 0 011.668.004l7.872 8.581a1.252 1.252 0 01.176 1.348 1.114 1.114 0 01-1.005.7H14v6.877A1.125 1.125 0 0112.877 19zM7.25 17.75h5.5v-8h4.934L10 1.31 2.258 9.75H7.25v8zM2.227 9.784l-.012.016c.01-.006.014-.01.012-.016z"></path>
              </g>
              <defs>
                <clipPath id="clip0_472_1110">
                  <path d="M0 0h20v20H0z"></path>
                </clipPath>
              </defs>
            </svg>

          </div>

          <div class='newsFeed__commentIcon'>
            <svg rpl="" class="icon-comment" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20" width="20" icon-name="comment-outline" fill="currentColor">
              <path fill='gray' d="M7.725 19.872a.718.718 0 01-.607-.328.725.725 0 01-.118-.397V16H3.625A2.63 2.63 0 011 13.375v-9.75A2.629 2.629 0 013.625 1h12.75A2.63 2.63 0 0119 3.625v9.75A2.63 2.63 0 0116.375 16h-4.161l-4 3.681a.725.725 0 01-.489.191zM3.625 2.25A1.377 1.377 0 002.25 3.625v9.75a1.377 1.377 0 001.375 1.375h4a.625.625 0 01.625.625v2.575l3.3-3.035a.628.628 0 01.424-.165h4.4a1.377 1.377 0 001.375-1.375v-9.75a1.377 1.377 0 00-1.374-1.375H3.625z"></path>
            </svg>

            <div class='newsFeed__comment'>4.1K</div>
          </div>

          <div class='newsFeed__shareIcon'>
            <svg rpl="" class="icon-share" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20" width="20" icon-name="share-ios-outline" fill="currentColor">
              <path fill='gray' d="M19 11v5.378A2.625 2.625 0 0116.378 19H3.622A2.625 2.625 0 011 16.378V11h1.25v5.378a1.373 1.373 0 001.372 1.372h12.756a1.373 1.373 0 001.372-1.372V11H19zM9.375 3.009V14h1.25V3.009l2.933 2.933.884-.884-4-4a.624.624 0 00-.884 0l-4 4 .884.884 2.933-2.933z"></path>
            </svg>
            <div class='newsFeed__share'>Share</div>
          </div>

        </div>
        
      </div>
    </div>
    </div>
    </div>
    )
    }
    export default RedditFeed;
