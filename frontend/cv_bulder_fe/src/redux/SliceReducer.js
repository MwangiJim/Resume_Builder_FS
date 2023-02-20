import {createSlice} from '@reduxjs/toolkit'

export const CanvasCvSlice=createSlice({
    name:'CV',
    initialState:{
        canvasState:false,
        SkillsSelected:[
        
        ],
        BasicDetails:{

        },
        previewInputValues:{

        },
        DataStore:{

        },
        coverLetterTemplate:false
    },
    reducers:{
        setCanvasState:(state,action)=>{
            return{
                ...state,
                canvasState:action.payload
            }
        },
        setSkillsSelected:(state,action)=>{
            return{
                ...state,
                SkillsSelected:[...state.SkillsSelected,action.payload]
            }
        },
        setBasicDetails:(state,action)=>{
            return{
                ...state,
                BasicDetails:action.payload
            }
        },
        setPreviewValues:(state,action)=>{
            return{
                ...state,
                previewInputValues:action.payload
            }
        },
        setDataStore:(state,action)=>{
            return {
                ...state,
                DataStore:action.payload
            }
        },
        setCoverletterState:(state,action)=>{
            return{
                ...state,
                coverLetterTemplate:action.payload
            }
        }
    }
})

export const {setCanvasState,setSkillsSelected,
    setBasicDetails,setPreviewValues,
    setDataStore,setCoverletterState} = CanvasCvSlice.actions;
export default CanvasCvSlice.reducer;