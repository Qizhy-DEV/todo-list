import { TaskInterface } from '@/interfaces/task';
import { StatusToast } from '@/interfaces/toast';
import { addTask } from '@/store/tasksSlice';
import React, { useEffect, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import '@/styles/form.css';
import { handleExpandOrCollapseForm } from '@/utils/utils';
import { FormValues, taskSchema } from '@/validations/TaskSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import toastManager from '@/utils/taskManager';
import overlayManager from '@/utils/overlayManager';

interface Props {
    visible: boolean;
    onClose: () => void;
}

const AddNewForm = ({ visible, onClose }: Props) => {
    const formRef = useRef<HTMLFormElement | null>(null);

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: yupResolver(taskSchema),
        mode: 'onBlur',
        defaultValues: {
            title: '',
            subtitle: '',
        },
    });

    const dispatch = useDispatch();

    useEffect(() => {
        overlayManager.on('onClose', onClose);

        return () => {
            overlayManager.off('onClose', onClose);
        };
    }, []);

    useEffect(() => {
        if (visible) {
            overlayManager.onOpen();
        } else {
            overlayManager.onClose();
        }
    }, [visible]);

    useEffect(() => {
        if (formRef.current) {
            handleExpandOrCollapseForm({
                formRef,
                collapseHeight: '250px',
                collapseWidth: '500px',
                expandHeight: '270px',
                expandWidth: '520px',
                visible,
                displayType: 'flex',
            });
        }
    }, [visible]);

    const onSubmit = (data: FormValues) => {
        const task: TaskInterface = {
            id: new Date().toISOString(),
            isCompleted: false,
            title: data.title,
            subtitle: data.subtitle,
        };
        dispatch(addTask(task));
        onClose();
        toastManager.notify({
            title: 'Success',
            subtitle: 'Create new task successfully',
            status: StatusToast.SUCCESS,
            done: false,
            duration: 3000,
        });
        reset();
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className={`form`}>
            <h3 className="form__title">Add New Task</h3>
            <Controller
                name="title"
                control={control}
                render={({ field }) => (
                    <input {...field} placeholder="Title" className="form__txt" />
                )}
            />
            {errors.title && <span className="form__error">{errors.title.message}</span>}
            <Controller
                name="subtitle"
                control={control}
                render={({ field }) => (
                    <input {...field} placeholder="Subtitle" className="form__txt" />
                )}
            />
            {errors.subtitle && <span className="form__error">{errors.subtitle.message}</span>}
            <button type="submit" className="form__btn form__btn-add">
                Add New Task
            </button>
            <button onClick={onClose} type="button" className="form__btn-close fa-solid fa-xmark" />
        </form>
    );
};

export default AddNewForm;
