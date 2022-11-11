import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    background-color: #ffffff;
`;

export const Card = styled.View`
    width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
`;

export const UserInfoSection = styled.View`
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    padding: 15px;
`;

export const UserImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const UserName = styled.Text`
    font-size: 14px;
    font-weight: bold;
    /* font-family: 'Lato-Regular'; */
`;

export const MessageContents = styled.Text`
    font-size: 14px;
    color: #333333;
    padding-left: 15px; 
    padding-right: 15px;
`;

export const PostImage = styled.Image`
    width: 100%;
    height: 250px;
    margin-top: 15px;
`;

export const Divider = styled.View`
    border-bottom-color: #dddddd;
    border-bottom-width: 1px;
    width: 92%;
    align-self: center;
    margin-top: 15px;
`;

export const InteractionWrapper = styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding: 15px;
`;

export const Interactions = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    padding: 2px 5px;
    /* background-color: ${props => props.active ? '#2e64e515' : 'transparent'} */
`;

export const InteractionTexts = styled.Text`
    font-size: 12px;
    color: #333333;
    font-weight: bold;
    margin-top: 5px;
    margin-left: 5px;
`;