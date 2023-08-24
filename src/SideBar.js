import React from 'react';
import './SideBar.scss';
const SideBar = () => {
  return (
    <div classNamee='sideBarContainer'>
    
      <div className='sideBarContainer__icons'>
        <a href='#e' className='sideBarContainer__section'>
        
          <svg
            rpl=''
            className='text-neutral-content-weak text-20 ml-[0.375rem] col-start-2'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            height='20'
            width='20'
            icon-name='home-outline'
            fill='currentColor'
          >
            <path d='M17.75 8.565L19 9.4v8.551A1.053 1.053 0 0117.943 19h-5.2a.71.71 0 01-.712-.709v-4.522c0-.762-1.147-1.479-2.036-1.479s-2.036.717-2.036 1.479v4.522a.711.711 0 01-.707.709H2.057A1.052 1.052 0 011 17.954V9.4l1.25-.838v9.188h4.464v-3.981c0-1.538 1.766-2.729 3.286-2.729s3.286 1.191 3.286 2.729v3.981h4.464V8.565zm2.05-1.789L10.65.646A1.126 1.126 0 009.362.638L.2 6.776l.7 1.039 9.1-6.1 9.1 6.1.7-1.039z'></path>
          </svg>
          <span>Home</span>
          <span className='sideBarContainer__downArrow'>&#160;</span>
        </a>
      </div>

      <div className='sideBarContainer__icons'>
        <a href='#e' className='sideBarContainer__section'>
          <svg
            rpl=''
            className='text-neutral-content-weak text-20 ml-[0.375rem] col-start-2'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            height='20'
            width='20'
            icon-name='popular-outline'
            fill='currentColor'
          >
            <g clip-path='url(#clip0_474_48)'>
              <path d='M10 0a10 10 0 1010 10A10.011 10.011 0 0010 0zm0 18.75a8.7 8.7 0 01-5.721-2.145l8.471-8.471v4.148H14V6.638A.647.647 0 0013.362 6H7.718v1.25h4.148L3.4 15.721A8.739 8.739 0 1110 18.75z'></path>
            </g>
            <defs>
              <clipPath id='clip0_474_48'>
                <path d='M0 0h20v20H0z'></path>
              </clipPath>
            </defs>
          </svg>
          <span>Popular</span>
          <span className='sideBarContainer__downArrow'>&#160;</span>
        </a>
      </div>

      <div className='sideBarContainer__line'></div>
      <div className='sideBarContainer__header'>RECENT</div>
      <div className='sideBarContainer__icons'>
        <a href='#e' className='sideBarContainer__section'>
          <img
            src='https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_p6kb2m6b185b1.png'
            srcset=''
            sizes=''
            style={{ width: '30px', height: '30px' }}
            alt='r/AskReddit icon'
          />
          <span>r/askreddit</span>
          <span className='sideBarContainer__downArrow'>&#160;</span>
        </a>
      </div>

      <div className='sideBarContainer__line'></div>

      <div className='sideBarContainer__header'>TOPICS</div>

      <div className='sideBarContainer__icons'>
        <a
          href='#e'
          className='sideBarContainer__section sideBarContainer__topics'
        >
         
          <svg
            rpl=''
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            height='20'
            width='20'
            icon-name='topic-videogaming-outline'
            fill='currentColor'
          >
            <path d='M19.929 14.17L18.277 6.6a4.631 4.631 0 00-4.52-3.6H5.702a4.623 4.623 0 00-4.58 3.908L.034 14.387a3.134 3.134 0 00.735 2.5 3.227 3.227 0 005.553-1.284l.39-1.635h5.794l.39 1.635A3.2 3.2 0 0016.01 18h.782a3.211 3.211 0 003.123-2.444c.109-.455.114-.929.015-1.386zm-1.6 1.85a1.964 1.964 0 01-1.54.73h-.781a1.947 1.947 0 01-1.9-1.453l-.63-2.476H5.74L5.11 15.3a1.947 1.947 0 01-1.9 1.453 1.974 1.974 0 01-1.5-.678 1.862 1.862 0 01-.443-1.506l1.09-7.481A3.366 3.366 0 015.7 4.25h8.062a3.373 3.373 0 013.3 2.614l1.65 7.573a1.877 1.877 0 01-.383 1.583h-.001z'></path>
            <path d='M6.256 6.212h-1.25v1.776h-1.73v1.25h1.73v1.622h1.25V9.238h1.73v-1.25h-1.73V6.212zM11.82 8.81a1 1 0 101.71.71 1.001 1.001 0 00-.3-.71 1.034 1.034 0 00-1.41 0zM15.23 6.85a.875.875 0 00-.32-.22c-.246-.1-.522-.1-.77 0a.875.875 0 00-.32.22.975.975 0 000 1.41 1 1 0 001.41 0 1.03 1.03 0 00.22-1.09.877.877 0 00-.22-.32z'></path>
          </svg>
          <span>Gaming</span>
          <span classNameNameName='sideBarContainer__downArrow'>&#8964;</span>
        </a>
      </div>

      <div className='sideBarContainer__icons'>
        <a
          href='#e'
          className='sideBarContainer__section
       sideBarContainer__topics               '
        >
         
          <svg
            rpl=''
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            height='20'
            width='20'
            icon-name='topic-sports-outline'
            fill='currentColor'
          >
            <g clip-path='url(#clip0_1581_854)'>
              <path d='M10 0a10 10 0 1010 10A10.011 10.011 0 0010 0zM4.124 16.465l1.259-3.007a9.906 9.906 0 00.261-6.964l-1.186.4a8.656 8.656 0 01-.228 6.087l-1.046 2.5a8.75 8.75 0 1113.632 0l-1.046-2.5a8.653 8.653 0 01-.228-6.086l-1.186-.4a9.906 9.906 0 00.261 6.964l1.259 3.007a8.7 8.7 0 01-11.752-.001z'></path>
            </g>
            <defs>
              <clipPath id='clip0_1581_854'>
                <path d='M0 0h20v20H0z'></path>
              </clipPath>
            </defs>
          </svg>

          <span>Sports</span>
          <span className='sideBarContainer__downArrow'>&#8964;</span>
        </a>
      </div>


      <div className='sideBarContainer__icons'>
        <a
          href='#e'
          className='sideBarContainer__section
       sideBarContainer__topics               '
        >
         <svg
            rpl=''
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            height='20'
            width='20'
            icon-name='topic-business-outline'
            fill='currentColor'
            >
            <path d='M2.25 19H1v-4.5h1.25V19zm4-7H5v7h1.25v-7zm8 0H13v7h1.25v-7zm4-5H17v12h1.25V7zM6 7.557l3.206 3.2a1.126 1.126 0 001.59 0l8.647-8.646-.884-.884L10 9.79l-3.2-3.2a1.153 1.153 0 00-1.59 0L.559 11.231l.884.884L6 7.557zm4.25 6.943H9V19h1.25v-4.5z'></path>
            </svg>

          <span>Business</span>
          <span className='sideBarContainer__downArrow'>&#8964;</span>
        </a>
      </div>
      {/* <div className='sideBarContainer__icons'>
        <a
          href='#e'
          classNamee='sideBarContainer__section
                      sideBarContainer__topics'
        >
         
          <svg
            rpl=''
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            height='20'
            width='20'
            icon-name='topic-business-outline'
            fill='currentColor'
          >
            <path d='M2.25 19H1v-4.5h1.25V19zm4-7H5v7h1.25v-7zm8 0H13v7h1.25v-7zm4-5H17v12h1.25V7zM6 7.557l3.206 3.2a1.126 1.126 0 001.59 0l8.647-8.646-.884-.884L10 9.79l-3.2-3.2a1.153 1.153 0 00-1.59 0L.559 11.231l.884.884L6 7.557zm4.25 6.943H9V19h1.25v-4.5z'></path>
          </svg>

          <span>Business</span>
          <span className='sideBarContainer__downArrow'>&#8964;</span>
        </a>
      </div> */}

      <div className='sideBarContainer__icons'>
        <a
          href='#e'
          className='sideBarContainer__section sideBarContainer__topics'
        >
  
          <svg
            rpl=''
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            height='20'
            width='20'
            icon-name='topic-crypto-outline'
            fill='currentColor'
          >
            <path d='M11.66 14H8.34a1.126 1.126 0 01-.974-.562l-1.8-3.125a.623.623 0 010-.625l1.8-3.125A1.125 1.125 0 018.34 6h3.32a1.125 1.125 0 01.974.563l1.8 3.125a.623.623 0 010 .625l-1.8 3.125a1.127 1.127 0 01-.974.562zm-3.247-1.25h3.174L13.175 10l-1.588-2.75H8.413L6.825 10l1.588 2.75zm-3.93-4.312l1.443-2.5a1.13 1.13 0 000-1.125l-1.9-3.292-1.083.625 1.864 3.229-1.37 2.375H.4V9h3.1a1.126 1.126 0 00.982-.562zm1.443 6.75a1.13 1.13 0 000-1.125l-1.444-2.5A1.125 1.125 0 003.508 11H.4v1.25h3.036l1.371 2.375-1.864 3.229 1.083.625 1.9-3.291zM19.6 7.75h-3.036l-1.37-2.375 1.863-3.229-1.083-.625-1.9 3.292a1.13 1.13 0 000 1.125l1.444 2.5a1.126 1.126 0 00.974.562h3.1l.008-1.25zm-2.539 10.1l-1.864-3.229 1.371-2.375H19.6V11h-3.1a1.125 1.125 0 00-.974.563l-1.444 2.5a1.13 1.13 0 000 1.125l1.9 3.291 1.08-.629z'></path>
          </svg>

          <span>Crypto</span>
          <span className='sideBarContainer__downArrow'>&#8964;</span>
        </a>
      </div>

      <div className='sideBarContainer__icons'>
        <a
          href='#a'
          className='sideBarContainer__section sideBarContainer__topics'
        >
        
          <svg
            rpl=''
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            height='20'
            width='20'
            icon-name='topic-television-outline'
            fill='currentColor'
          >
            <path d='M10.375 15h-4.75A2.63 2.63 0 013 12.375v-4.75A2.629 2.629 0 015.625 5h4.75A2.63 2.63 0 0113 7.625v4.75A2.63 2.63 0 0110.375 15zm-4.75-8.75A1.377 1.377 0 004.25 7.625v4.75a1.377 1.377 0 001.375 1.375h4.75a1.377 1.377 0 001.375-1.375v-4.75a1.377 1.377 0 00-1.375-1.375h-4.75zM16.29 7.33c.19-.188.297-.443.3-.71a1.224 1.224 0 00-.02-.19.602.602 0 00-.06-.19.557.557 0 00-.09-.17 1.01 1.01 0 00-.13-.16 1.02 1.02 0 00-1.08-.21.933.933 0 00-.33.21.61.61 0 00-.12.16.95.95 0 00-.1.17c-.023.062-.04.125-.05.19a1.007 1.007 0 00.27.9.933.933 0 00.33.21.838.838 0 00.38.08 1.01 1.01 0 00.7-.29zm-.51 3.27c.066-.01.13-.03.19-.06a.557.557 0 00.17-.09 1.017 1.017 0 00.45-.83 1.224 1.224 0 00-.02-.19.602.602 0 00-.06-.19.557.557 0 00-.09-.17 1.01 1.01 0 00-.13-.16 1.02 1.02 0 00-1.08-.21.933.933 0 00-.33.21.61.61 0 00-.12.16.95.95 0 00-.1.17c-.023.062-.04.125-.05.19a1.007 1.007 0 00.27.9c.192.183.445.286.71.29.064-.002.127-.008.19-.02zm2.6 7.4H1.625A1.627 1.627 0 010 16.375V3.625A1.627 1.627 0 011.625 2h16.75A1.627 1.627 0 0120 3.625v12.75A1.627 1.627 0 0118.375 18h.005zM1.625 3.25a.375.375 0 00-.375.375v12.75a.375.375 0 00.375.375h16.75a.375.375 0 00.375-.375V3.625a.375.375 0 00-.375-.375H1.625z'></path>
          </svg>

          <span>Television</span>
          <span className='sideBarContainer__downArrow'>&#8964;</span>
        </a>
      </div>

      <div className='sideBarContainer__icons'>
        <a
          href='#e'
          className='sideBarContainer__section  sideBarContainer__topics'
        >
         
          <svg
            rpl=''
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            height='20'
            width='20'
            icon-name='topic-celebrity-outline'
            fill='currentColor'
          >
            <path d='M10 14a3 3 0 110-6 3 3 0 010 6zm0-4.75a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zm5.5 10.274c-.151 0-.3-.03-.438-.09L10 17.26l-5.062 2.174A1.1 1.1 0 013.4 18.32l.51-5.462-3.634-4.12a1.1 1.1 0 01.588-1.8l5.376-1.2 2.812-4.723a1.141 1.141 0 011.9 0l2.808 4.718 5.377 1.2a1.1 1.1 0 01.587 1.8l-3.64 4.119.512 5.46a1.101 1.101 0 01-1.1 1.206l.004.006zM10 16c.15 0 .298.03.436.088l4.893 2.1-.494-5.278a1.1 1.1 0 01.27-.83l3.514-3.98-5.193-1.161a1.1 1.1 0 01-.71-.515L10 1.864 7.28 6.428a1.1 1.1 0 01-.706.512L1.38 8.099l3.514 3.98a1.1 1.1 0 01.27.834l-.494 5.275 4.893-2.1C9.702 16.03 9.85 16 10 16z'></path>
          </svg>

          <span>Celebrity</span>
          <span className='sideBarContainer__downArrow'>&#8964;</span>
        </a>
      </div>
      <div className='sideBarContainer__seeMore'>See More</div>

      <div className='sideBarContainer__line'></div>

      <div className='sideBarContainer__header'>RESOURCES</div>

      <div className='sideBarContainer__icons'>
        <a href='#e' className='sideBarContainer__section'>
          <svg
            rpl=''
            className='ml-[0.375rem] col-start-2 text-neutral-content-weak'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            height='20'
            width='20'
            icon-name='admin-outline'
            fill='currentColor'
          >
            <g clip-path='url(#clip0_474_17)'>
              <path d='M19.94 9.211a3.25 3.25 0 00-3.177-2.642c-.45 0-.895.102-1.3.3a10.814 10.814 0 00-4.839-1.379l.811-3.741 2.444.519a1.492 1.492 0 10.2-1.235L11.573.5a1.13 1.13 0 00-1.333.862L9.344 5.5a10.773 10.773 0 00-4.792 1.357 3.215 3.215 0 00-1.315-.289A3.249 3.249 0 00.064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 00.912 1.754l.066.071v.127c.076 3.69 4.014 6.582 8.976 6.582 4.962 0 8.892-2.889 8.966-6.567l.006-.138.044-.046a3.252 3.252 0 00.94-1.778c.067-.4.062-.81-.016-1.208zm-1.22 1c-.076.42-.282.805-.59 1.1l-.393.407-.024.625c-.06 3-3.45 5.354-7.717 5.354-4.267 0-7.66-2.353-7.718-5.371l-.024-.6-.4-.433c-.3-.293-.5-.674-.57-1.087a2.138 2.138 0 01.011-.765 2 2 0 011.942-1.623c.353.003.699.102 1 .286l.337.216.335-.22a9.437 9.437 0 014.758-1.381h.72a9.43 9.43 0 014.726 1.4l.347.225.343-.232a1.7 1.7 0 01.96-.3 2 2 0 011.95 1.629c.048.253.05.512.006.766v.004z'></path>
            </g>
            <defs>
              <clipPath id='clip0_474_17'>
                <path d='M0 0h20v20H0z'></path>
              </clipPath>
            </defs>
          </svg>
          <span>About Reddit</span>
          <span className='sideBarContainer__downArrow'>&#160;</span>
        </a>
      </div>

      <div className='sideBarContainer__icons'>
        <a href='#e' className='sideBarContainer__section'>
          <svg
            rpl=''
            className='ml-[0.375rem] col-start-2 text-neutral-content-weak'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            height='20'
            width='20'
            icon-name='topic-activism-outline'
            fill='currentColor'
          >
            <path d='M15.175 13.11c-.237.462-.428.6-.514.627l-.133-.035c-.439-.238-1.278-2.03-1.278-5.2 0-2.95.729-4.718 1.184-5.144l.245-.087c.095.042.276.192.5.62l.284.556 1.113-.57-.285-.556c-.541-1.057-1.17-1.3-1.618-1.316h-.044a1.4 1.4 0 00-.754.23L3.7 5.852c-.915-.552-1.847-.991-2.61-.58C.237 5.735.044 6.98 0 9c.047 2 .24 3.245 1.093 3.7.783.423 1.754-.06 2.7-.637.288.1.685.218 1.224.37v4.347a1.122 1.122 0 001.121 1.12h2.75a1.123 1.123 0 001.122-1.12v-3l4.028 1.075c.183.088.384.134.587.135.45 0 1.1-.23 1.661-1.32l.285-.555-1.113-.57-.283.566zm-11.882-2.2c-1.247.782-1.546.734-1.607.7C1.6 11.56 1.3 11.229 1.25 9c.049-2.25.345-2.582.434-2.63.064-.033.361-.081 1.61.7a.624.624 0 00.54.058l8.838-3.146A13.9 13.9 0 0012 8.5c-.034 1.608.221 3.21.754 4.728L3.79 10.834a.622.622 0 00-.497.073v.004zm2.97 5.753v-3.877c.678.184 1.507.405 2.5.67v3.2l-2.5.007zM19.25 8v1.25H16V8h3.25zm-3.477-2.674l2.82-1.594.615 1.088-2.819 1.594-.616-1.088zm.616 5.26l2.819 1.594-.615 1.088-2.82-1.594.616-1.088z'></path>
          </svg>
          <span>Advertise</span>
          <span className='sideBarContainer__downArrow'>&#160;</span>
        </a>
      </div>

      <div className='sideBarContainer__icons'>
        <a href='#e' className='sideBarContainer__section'>
          <svg
            rpl=''
            className='ml-[0.375rem] col-start-2 text-neutral-content-weak'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            height='20'
            width='20'
            icon-name='help-outline'
            fill='currentColor'
          >
            <g clip-path='url(#clip0_474_80)'>
              <path d='M10 20a10 10 0 1110-10 10.011 10.011 0 01-10 10zm0-18.75A8.75 8.75 0 1018.75 10 8.76 8.76 0 0010 1.25zm1.611 4.058a2.4 2.4 0 01.994.861c.241.375.366.812.359 1.258a2.04 2.04 0 01-.167.854c-.1.229-.238.439-.407.622-.2.208-.413.404-.636.588-.223.188-.4.348-.533.483a1.754 1.754 0 00-.328.464 1.326 1.326 0 00-.13.591v.78H9.328v-.759a2.216 2.216 0 01.601-1.572c.204-.21.421-.406.65-.588.209-.173.373-.316.492-.431a1.52 1.52 0 00.3-.4 1.154 1.154 0 00-.058-1.128 1.192 1.192 0 00-.485-.421 1.525 1.525 0 00-.677-.151 1.545 1.545 0 00-.721.168 1.3 1.3 0 00-.713 1.131H7.256a2.628 2.628 0 011.381-2.293A3.132 3.132 0 0110.175 5c.496-.008.987.097 1.436.308zm-2.164 9.843a1.088 1.088 0 01-.386-.385 1.034 1.034 0 01-.144-.537c-.002-.186.048-.37.144-.53.094-.16.227-.293.386-.387a1.03 1.03 0 01.53-.143 1.062 1.062 0 01.926 1.597c-.096.159-.23.291-.389.385a1.034 1.034 0 01-.537.144 1.021 1.021 0 01-.53-.144z'></path>
            </g>
            <defs>
              <clipPath id='clip0_474_80'>
                <path d='M0 0h20v20H0z'></path>
              </clipPath>
            </defs>
          </svg>

          <span>Help</span>
          <span className='sideBarContainer__downArrow'>&#160;</span>
        </a>
      </div>

      <div className='sideBarContainer__seeMore'>See More</div>

      <div className='sideBarContainer__line'></div>
    </div>
  );
};
export default SideBar;


