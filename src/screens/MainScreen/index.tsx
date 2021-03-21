import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {AddTodo} from '../../components/AddTodo';
import {Todo} from '../../components/Todo';
import {TodoItemProps} from '../../components/Todo/interfaces';
import {MainScreenProps} from './interfaces';

export const MainScreen: FC<MainScreenProps> = ({
  todos,
  onAddTodo,
  onRemoveTodo,
  onOpenTodo,
}) => {
  return (
    <View>
      <AddTodo onAddTodo={onAddTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item: TodoItemProps) => item.id}
        renderItem={({item}) => (
          <Todo todo={item} onRemove={onRemoveTodo} onOpen={onOpenTodo} />
        )}
      />
    </View>
  );
};
