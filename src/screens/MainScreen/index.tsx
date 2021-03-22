import React, {FC} from 'react';
import {FlatList, Image, View} from 'react-native';
import {AddTodo} from '../../components/AddTodo';
import {Todo} from '../../components/Todo';
import {TodoItemProps} from '../../components/Todo/interfaces';
import {MainScreenProps} from './interfaces';
import {styles} from './styles';

export const MainScreen: FC<MainScreenProps> = ({
  todos,
  onAddTodo,
  onRemoveTodo,
  onOpenTodo,
}) => {
  return (
    <View>
      <AddTodo onAddTodo={onAddTodo} />
      {todos.length ? (
        <FlatList
          data={todos}
          keyExtractor={(item: TodoItemProps) => item.id}
          renderItem={({item}) => (
            <Todo todo={item} onRemove={onRemoveTodo} onOpen={onOpenTodo} />
          )}
        />
      ) : (
        <View style={styles.imageWrap}>
          <Image
            style={styles.image}
            source={require('../../../assets/no-items.png')}
          />
        </View>
      )}
    </View>
  );
};
