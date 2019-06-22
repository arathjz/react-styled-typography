# React-Styled-Typography

### Description
The Typography component uses styled-components behind and sets the styles passed by props. The component will return an html tag defined in it's props with some extra features.

### Installation
```bash
$ npm install react-styled-typography
$ yarn add react-styled-typography
 ```

### Usage
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

### Contribute
Show your heart and support by giving a ⭐. Any suggestions are welcome ! 

### License
Licensed under MIT
