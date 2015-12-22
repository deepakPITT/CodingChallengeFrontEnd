<h3>CODING CHALLENGE</h3>
<p>
 Following are the requirements for the challenge
<li>
The page should have a fixed height position header and fixed height footer. The footer should stay attached to the bottom of the page and of the defined fixed height regardless of browser resize action. </li>
<li>The interior display area should be a fixed height of 400 pixels regardless of browser size.</li>
<li>The footer will be allowed to separate from the display area as the window is resized.</li>
<li>There should be a clock on the upper right corner of the page in the black header area and it should be up to date. It should be vertically centered if possible in the header.</li>
<li>The header bar will contain a positional control for the floating panel. Radio options for the "Position" should be mutually exclusive and the selection state should be properly hooked up with the position of the floating block in the middle of the page. Ideally these will be vertically centered in the header.</li>
<li> Whatever the position option is selected, the floating block in the display area.should have text indicating its position. Example "Lower Right" for option 2, "Center" for option 1.</li>
<li> When the position option is set to "Center", the floating block should be perfectly centered in the browser viewable window, and it should readjust itself when the browser is resized, but always sticks to the center.</li>
<li> The grey floating block should be draggable, but ONLY WITHIN THE LIGHT GREAY AREA under the black header, it should not be able to be dragged outside the the grey containment even in the event of resizing of the browser. Dragging it from the picture above should snap it back into the area.</li>

</li>
</p>

<h3> STEPS FOLLOWED TO SOLVE CHALLENGE </h3>
<p>
The document is divided into 3 parts header, footer, body<br>
Header is fixed with properties top and bottom 0, to stick it to top of the page, the height of header is fixed to 50px.<br>
So, now the header is in place, and when we start placing body below header it starts from top left so using javascript we make the top for body start from 50px. The body is given a fixed height of 400px according to the document.<br> In the body there is another element which is made dragabble using jQuery UI, which can move or can be dragged within the parent boundaries.<br>
Footer is also fixed for resolutions where height is greater than 400+50+50 = 500px, else footer is absolute with body's minimum height of 500px.<br/>
In this apart from normal functionality we check for keydown events for esc and enter, to make the dragabble element hide and show.
</p>
