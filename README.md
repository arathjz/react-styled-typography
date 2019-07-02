# React-Styled-Typography

### Description
The Typography component uses styled-components behind and sets the styles passed by props. The component will return an html tag defined in it's props with some extra features.

### Installation
```bash
$ npm install react-styled-typography
$ yarn add react-styled-typography
 ```

### Usage
 
---

**Basic usage**

```javascript
import React, { Component } from 'react';
import Typography from 'react-styled-typography';

Class App extends Component {
    render() {
        return(
            <div>
                <Typography variant="h1" fontSize="10" color="#000">Hey, I am a h1 tag</Typography>
                <Typography variant="h2" fontSize="10" color="#000">Hey, I am a h2 tag</Typography>
                <Typography variant="h3" fontSize="10" color="#000">Hey, I am a h3 tag</Typography>
                <Typography variant="h4" fontSize="10" color="#000">Hey, I am a h4 tag</Typography>
                <Typography variant="h5" fontSize="10" color="#000">Hey, I am a h5 tag</Typography>
                <Typography variant="h6" fontSize="10" color="#000">Hey, I am a h6 tag</Typography>
                <Typography variant="p" fontSize="10" color="#000">Hey, I am a p tag</Typography>
                <Typography variant="pre" fontSize="10" color="#000">Hey, I am a pre tag</Typography>
            </div>
        )
    }
}

```

---

**Using css and media sizes**

```javascript
import React, { Component } from 'react';
import Typography from 'react-styled-typography';

Class App extends Component {
    render() {
        return(
            <div>
                <Typography
                    variant="h1"  
                    css={`
                        color: red;
                        margin:4rem auto;
                    `}>Hey, I have css styles</Typography>
                
                <Typography 
                    color="black"
                    mediaCSS={[500,`
                                color: blue;
                                font-size: 22px;
                            `]}>Changes at smaller screens</Typography>

                <Typography desktopCSS={`
                        color: yellow;
                    `} 
                    fontSize="10" 
                    color="#000">desktopCSS</Typography>

                    <Typography tabletCSS={`
                        color: green;
                        font-size: 30px;
                    `} 
                    fontSize="10" 
                    color="#000">tabletCSS</Typography>

                    <Typography phoneCSS={`
                        color: orange;
                      

                    `} 
                    fontSize="10" 
                    color="purple">phoneCSS</Typography>
               
            </div>
        )
    }
}

```


---

**Helpers**

```javascript
import React, { Component } from 'react';
import Typography from 'react-styled-typography';

Class App extends Component {
    render() {
        return(
            <div>
                <Typography truncate="60px">This text is going to be truncated </Typography>
                
                 <Typography 
      fontSize="10" 
      clampin={{
          height:"20px",
          type:"dots", 
          lineSize:"10px"}}
      css={"width: 40px"} 
      
      color="#000"> This awesome property allows limiting of the contents of a block container to the specified number of lines.</Typography>
    
            </div>
        )
    }
}

```


### API
 | Props        | Type           | Description  | Example |
| :-------------: |:-------------:| :-------------:| :-------------:|
| color      | String | Font Color | #ffffff |
| variant      | String      |   Tag: h1, h2, h3, h4, h5, h6, p, pre |  variant="h1" return a h1 tag |
| marginT | String      |    Margin Top. Sets value in pixels | marginT="10", sets margin-top: 10px |
| marginR | String      |    Margin Right. Sets value in pixels | marginR="10", sets margin-right: 10px |
| marginB | String      |    Margin Bottom. Sets value in pixels | marginB="10", sets margin-bottom: 10px |
| marginL | String      |    Margin Left. Sets value in pixels | marginL="10", sets margin-left: 10px |
| align | String      |    Text Align. left, right, center | align="center" |
| fontSize | String      |    Font Size. Sets value in pixels | fontSize="10,  sets font-size: 10px |
| className | String      |    Class Name | className="heading1" |
| underline | Boolean      |    Sets text-decoration: underline | underline={true} |
| weight | String      |    Font Weight | weight: 500, sets font-weight: 500 |
| fontStyle | String      |    Font Style: normal, italic, oblique, initial, inherit | fontStyle="italic", sets font-style: italic |
| truncate   | String | Trucante text | truncate:100, trucates text with a length of 100px |
| clampin   | JSON | Multiline Trucate  (type dots,fade) | truncate:{height:"20px",type:"dots", lineSize:"10px"}, truncate 2 lines of 10px each with dots  |
| css   | String |CSS style| `/*css styles*/` |
| mediaCSS   | Array [2] | CSS style media  | [500,`/*css  string*/`] sets a breaking point of 500px and applies the styles of the string |
| desktopCSS | String | CSS style media 990px screens | `/*css string*/` applies the styles of the string|
| tabletCSS  | String |CSS style media size 700px screens |`/*css string*/` applies the styles of the string |
| phoneCSS   | String |CSS style media size 500px screens |`/*css string*/` applies the styles of the string|


### Contribute
Show your heart and support by giving a ⭐. Any suggestions are welcome ! 

### License
Licensed under MIT
