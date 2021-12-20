import React, { memo } from "react";
import styled from "styled-components/native";
import { StyleSheet, Pressable } from 'react-native';
import { ANDROID_DEFAULT_RIPPLE_CONFIG } from "../../platformspec/AndroidSpec";

const StyledItemContainer = styled.View({
    borderColor: '#61C0BF',
    borderWidth: StyleSheet.hairlineWidth,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 18,
    margin: 10,
})

const StyledPressable = styled(Pressable)({
    height: 50,
    padding: 10,
    borderRadius: 18,
    justifyContent: 'center',
})

const MediumText = styled.Text({
    color: '#61C0BF',
    fontSize: 18
})

const CategoryItem = ({ title, onItemClicked }: { title: string, onItemClicked: () => void }) => {
    return (
        <StyledItemContainer>
            <StyledPressable onPress={onItemClicked} android_ripple={ANDROID_DEFAULT_RIPPLE_CONFIG}>
                <MediumText>{title}</MediumText>
            </StyledPressable>
        </StyledItemContainer>
    );
}

export default memo(CategoryItem)