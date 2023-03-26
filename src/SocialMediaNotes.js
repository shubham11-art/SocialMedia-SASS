//*// SASS Used
// Karan tyamule unnecessary classnames dyaychi garaj padat nahi.
// Peer Dependencies => npm config set legacy-peer-deps true
// Install SASS - npm install --save-dev node-sass

//*// SASS madhe styling kartana aapan js and scss file side by side open karun scss file js code nusar sass file madhe nested code lihun ghyayacha.

//*// Unnecessary css properties use karayachya nahit, aapan kay target kartoy ani konta div(parent, element) or class target kelyavar aapan element better hanlde karu shakato te samjun, apply karun baghayach ani mag apply karayach. HTML code kartana hi unnecessary div vaigare vadhavat basayache nahit.

//*// Pages and Components - pages chya aat aapan components use karto. Tyamule ekhad component aapan pahije tya page var or component madhe import karu shakato.

// Login.js - dispaly:flex astana container size detana flex:n; che dyayache and not of width:;
// Register.js - Same as Login.js // Same scss theu shakato aapan for register.scss like login.scss just eka property change ne all set hoil i.e .card madhe flex-direction:row-reverse karayachi. Karan login madhe jo right cha div aahe to register madhe left cha div aahe(style copy hoil fakt HTML content edit karayacha.).

//*// Layout(Navbar, Leftbar, Rightbar, MiddleSection(Homebar)) - As Navbar, Leftbar, Rightbar will remain always on display so rather that importing it on every page we can use Outlet property of the React Router Dom where we can use the Layout, children and set the path for various components and import this Layout commponent whenever needed.(26:00)
// Home.js (pages)
// Leftbar - .menu and .item hya classname ne sagale element cover kele karan ek sarakhe hote. So styling sathi pan easy zal. Leftbar and Rightbar fixed karnyasathi bhari code kelay.
// Rightbar
//*// first-child, last:child he tag var aaply kele jatat and not on classes/className.(.buttons var nahi tar button var apply kele aahet) i.e Pseduo Classes and Elements he tag var apply kele jatat.
// Dark and light mode madhe toggle kelay, tyasathichi theme ani styling apply keli, tyanantar contect api, local  storage, toggle function etc karun functionality achieve keli.(1:01:00)
// User Authentication (1:23:00)
// Homebar - Stories.js - backend kadun data fetch karun, map method vaprun vaparali aahe. .stories ha overall wrapper and .story ha content wrapper mhanun vaparala aahe.
// Homebar - Posts.js - backend kadun data fetch karun, map method vaprun vaparali aahe. Data display sathi vegala component banvala jyala posts madhala data pass kela aahe.
// Post.js - post ya prop through aalela data show kela aahe. .post chya aat ek .container ghetla aahe, padding vyavstit apply honyasathi.
// Comments.js - post chya khali comment var click kel ki commnets disnar tyasathi comments.js banavali aahe. post.js madhe state maintain karun && condition ne comment component dakhavala aahe.  {commentOpen && <Comments />}
// Profile.js and Userprofile.js - he Built kele. Userprofile.js madhe profileContainer ha nantar add kelay karan userInfo ya container la padding dyayachi hoti. i.e jashi need arise zali tas add kel

//*// Protected Routing
// Conditional Rendering karto aapan i.e user asel tar konta component dakhavayacha ani nasel tar konat component. Ex - {user ? <Home/> : <Resister/>}
//*// Leftbar and Rightbar fixed karnyasathi bhari code kelay.
//  position: sticky;  top: 70px;  height: calc(100vh - 70px);  overflow: scroll;  &::-webkit-scrollbar { display: none; }
//*// You cant store object in the local storage, it has to be a string.

//*// Responsive Design
// Sop aahe
// @media only screen and (max-width: 480px) {}, yaat max-width(breakpoint zala) specify karayachi ani Aaplya screen var jo element jasa pahije tyachya scss/css file madhe media query mention karun tyachya original properties rewrite karayachya.
// Scss file asali tar, konta className aapan target kartoy he pahun tyat media query lavayachi ani properties rewrite karayachya aahet. i.e tya element chya perticular bracket madhe jayach aani properties rewrite karayachya.
