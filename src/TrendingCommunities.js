import React from 'react';
import './TrendingCommunities.scss';
const TrendingCommunities=()=> {
 return (

<div className='popularCommunities'>

  <div className='popularCommunities__content'>
    <img src='https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_p6kb2m6b185b1.png'  alt=""/>
    <div className='popularCommunities__name'>r/AskReddit </div>

    <div className="popularCommunities__members">42,330,047 members
    </div>
  </div>

  <div className='popularCommunities__content'>
    <img src="https://styles.redditmedia.com/t5_388p4/styles/communityIcon_1xjv62tivxy61.png"  alt=""/>
    <div className='popularCommunities__name'>r/discordapp </div>

    <div className="popularCommunities__members"> 1,078,501 members
    </div>
  </div>

  <div className='popularCommunities__content'>
    <img src="https://styles.redditmedia.com/t5_2s0fe/styles/communityIcon_2cbkzwfs6kr21.png" alt=""/>

    <div className="popularCommunities__name">r/Twitch</div>

    <div className="popularCommunities__members">1,487,412 members</div>
  </div>

  <div className="popularCommunities__content">
    <img src="https://styles.redditmedia.com/t5_2qh1f/styles/communityIcon_l5h6yf1l3e5b1.png" alt="" />

    <div className="popularCommunities__name">r/apple</div>

    <div className="popularCommunities__members">4,251,912 members</div>

  </div>

  <div className="popularCommunities__content">
    <img src="https://styles.redditmedia.com/t5_2s30g/styles/communityIcon_wpxjh8fuvcw51.png" alt=""/>

    <div className="popularCommunities__name">r/AskMen</div>

    <div className="popularCommunities__members">5,591,068 members</div>
  </div>
  <div className="popularCommunities__seeMore">See more</div>

</div>
 )
}
export default TrendingCommunities;