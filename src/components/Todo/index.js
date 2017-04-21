import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Content, Body, Item, Form, Label, Input, Button, Text, List, ListItem, Icon, Left, Right, CheckBox } from 'native-base';
import styles from './styles';

class todo {
    id;
    name;
    done;

    constructor(id, name, done) {
        this.id = id;
        this.name = name;
        this.done = done;
    }
}

class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = { todos: [], todotext: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        this.handleToggleTodo = this.handleToggleTodo.bind(this);
    }

    handleChange(text) {
        this.setState({ todotext: text });
    }

    handleAddTodo() {

        let newTodo;
        if (this.state.todotext.trim() !== '')
            newTodo = new todo(Date.now(), this.state.todotext, false);
        else return; //return on empty todo

        this.setState((prevState) => {
            return {
                todos: prevState.todos.concat(newTodo),
                todotext: ''
            };
        })

        console.log(this.state.todos);

    }

    handleToggleTodo(id) {
        let newTodos = this.state.todos.map(todo => {
            if (todo.id === id)
                todo.done = !todo.done;
            return todo;
        });

        newTodos.sort((a, b) => {
            if (a.done && !b.done)
                return 1;
            else if (!a.done && !b.done)
                return 0;
            return -1;
        });


        this.setState({
            todos: newTodos
        });

        console.log(this.state.todos);
    }

    handleDeleteTodo(id) {
        let newTodos = this.state.todos.filter((todo) => (todo.id !== id));

        this.setState({
            todos: newTodos
        })
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item stackedLabel style={styles.inputStyle}>
                            <Label> Todo item</Label>
                            <Input inlineLabel value={this.state.todotext} onChangeText={this.handleChange} />
                        </Item>

                        <View style={styles.addBtnContainer}>
                            <Button success onPress={this.handleAddTodo}>
                                <Text> Add todo</Text>
                            </Button>
                        </View>
                    </Form>


                    <TodoList todos={this.state.todos}
                        toggleTodo={this.handleToggleTodo}
                        deleteTodo={this.handleDeleteTodo} />

                </Content>
            </Container>
        )
    }
}

class TodoList extends React.Component {

    constructor() {
        super();
        this.toggleTodo = this.toggleTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    toggleTodo(id) {
        this.props.toggleTodo(id);
    }

    deleteTodo(id) {
        this.props.deleteTodo(id);
    }

    render() {
        return (
            <ScrollView>
                <List>
                    {

                        this.props.todos.map(todo => (
                            <ListItem key={todo.id}>

                                <CheckBox checked={todo.done} onPress={() => this.toggleTodo(todo.id)} />
                                <Text style={{ marginLeft: 10 }} numberOfLines={1}> {todo.name} </Text>

                                <Right>
                                    <TouchableOpacity onPress={() => this.deleteTodo(todo.id)}>
                                        <Icon style={{ fontSize: 30 }} name='close'></Icon>
                                    </TouchableOpacity>
                                </Right>

                            </ListItem>
                        ))
                    }
                </List>

            </ScrollView>
        )
    }
}

export default TodoApp;