import React, {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';

import {CommentInput} from '../../components/CommentInput/CommentInput';
import ItemsList from '../../components/ItemsList/ItemsList';
import {
  addComment,
  addCommentReply,
  getComments,
} from '../../redux/reducers/courses/courses.actions';
import {COURSES_STATE} from '../../redux/reducers/courses/getState';
import {CommentItem} from './CommentItem';
import styles from './Styles';

const Questions = () => {
  const {lesson_id} = useSelector(COURSES_STATE.selectedLesson);
  const comments = useSelector(COURSES_STATE.comments) || [];
  const dispatch = useDispatch();
  const listRef = useRef();
  const commentInputRef = useRef(null);
  const [replyTo, setReplyToState] = useState();

  useEffect(() => {
    scrollToBottom();
  }, [listRef]);

  const scrollToBottom = () => {
    if (!listRef.current) return;

    listRef.current.scrollToEnd({animated: true});
  };

  useEffect(() => {
    if (!lesson_id) return;

    dispatch(getComments());
  }, [lesson_id]);

  const onReplyPress = comment => {
    setReplyToState(comment);
    if (!commentInputRef.current) return;

    commentInputRef.current?._toggleModal();
  };

  const onSubmit = message => {
    if (!replyTo) {
      dispatch(
        addComment({
          lesson_id,
          message,
        }),
      );
    } else {
      dispatch(
        addCommentReply({
          comment_id: replyTo.comment_id,
          lesson_id,
          message,
        }),
      );

      setReplyToState(null);
    }
  };

  return (
    <View style={styles.container}>
      <ItemsList
        data={comments}
        style={styles.list}
        ref={listRef}
        renderItem={({item, index}) => (
          <CommentItem comment={item} onReplyPress={onReplyPress} />
        )}
      />
      <CommentInput
        onSubmit={message => onSubmit(message)}
        ref={commentInputRef}
        replyTo={replyTo}
        onClose={() => setReplyToState(null)}
      />
    </View>
  );
};

export default Questions;
