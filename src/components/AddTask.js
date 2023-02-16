import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

export default function AddTask({setTasks}) {
    const [task, setTask] = useState("Call dad")

    const handleAddNewTask = ( ) => {
        console.log("handleTask", task)
        const newTask = {
            "done": false,
            "task": task
        }
        fetch(`https://todo-c9-api-ga.web.app/tasks/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        })
        .then(res => res.json())
        .then(setTasks)
        .catch(console.error)
        }

    return (
        <>
        <View>
            <Text>Add new task</Text>
            <TextInput 
                style={styles.input}
                value={task} 
                onChangeText={setTask} />
            <Button
                title="Click me"
                onPress={handleAddNewTask} />
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
})